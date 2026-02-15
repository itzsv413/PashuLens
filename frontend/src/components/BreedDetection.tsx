import { useState } from 'react';
import { Upload, Camera, FileImage, Loader, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import ML_API from "../api/mlApi";

export function BreedDetection() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isDetecting, setIsDetecting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setResult(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const detectBreed = async () => {
  if (!selectedFile) return;

  setIsDetecting(true);

  try {
    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await ML_API.post("/predict", formData);

    const predictedBreed = response.data.prediction;
    const confidenceScore = response.data.confidence;

    // Convert backend response into your UI format
    const formattedResult = {
  breed: predictedBreed,
  confidence: confidenceScore,
  origin: "India",
  characteristics: [
    "AI detected breed",
    "Based on deep learning model",
    "Confidence-based prediction"
  ],
  averageMilkYield: "Data coming soon",
  color: "Varies"
};


    setResult(formattedResult);

  } catch (error) {
    console.error("Error detecting breed:", error);
  } finally {
    setIsDetecting(false);
  }
};


  const resetDetection = () => {
    setSelectedFile(null);
    setPreviewUrl('');
    setResult(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Breed Detection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload a clear photo of your cattle or buffalo to identify the breed using our AI-powered detection system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="mr-2" size={24} />
                Upload Image
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* File Upload Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300 hover:border-green-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                
                {previewUrl ? (
                  <div className="space-y-4">
                    <img
                      src={previewUrl}
                      alt="Selected livestock"
                      className="max-h-64 mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600">{selectedFile?.name}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <FileImage className="mx-auto text-gray-400" size={64} />
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        Drop your image here, or{' '}
                        <label
                          htmlFor="file-upload"
                          className="text-green-600 hover:text-green-700 cursor-pointer underline"
                        >
                          browse
                        </label>
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Supports JPG, PNG, WEBP (Max 10MB)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={detectBreed}
                  disabled={!selectedFile || isDetecting}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  {isDetecting ? (
                    <>
                      <Loader className="mr-2 animate-spin" size={20} />
                      Detecting...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2" size={20} />
                      Detect Breed
                    </>
                  )}
                </Button>
                
                {selectedFile && (
                  <Button
                    onClick={resetDetection}
                    variant="outline"
                    className="px-8"
                  >
                    Reset
                  </Button>
                )}
              </div>

              {/* Tips */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-2">Tips for best results:</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Use clear, well-lit photos</li>
                  <li>• Show the full animal if possible</li>
                  <li>• Avoid blurry or dark images</li>
                  <li>• Multiple angles can improve accuracy</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2" size={24} />
                Detection Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!result && !isDetecting && (
                <div className="text-center py-12 text-gray-500">
                  <AlertCircle size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Upload an image and click "Detect Breed" to see results</p>
                </div>
              )}

              {isDetecting && (
                <div className="text-center py-12">
                  <Loader className="animate-spin mx-auto mb-4 text-green-600" size={48} />
                  <p className="text-gray-600">Analyzing your image...</p>
                  <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
                </div>
              )}

              {result && (
                <div className="space-y-6">
                  {/* Main Result */}
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-green-900">{result.breed}</h3>
                      <div className="text-right">
                        <div className="text-sm text-green-700">Confidence</div>
                        <div className="text-xl font-bold text-green-900">{result.confidence}%</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-green-800">Origin:</span>
                        <span className="ml-2 text-green-700">{result.origin}</span>
                      </div>
                      <div>
                        <span className="font-medium text-green-800">Color:</span>
                        <span className="ml-2 text-green-700">{result.color}</span>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="font-medium text-green-800">Avg. Milk Yield:</span>
                        <span className="ml-2 text-green-700">{result.averageMilkYield}</span>
                      </div>
                    </div>
                  </div>

                  {/* Characteristics */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Characteristics:</h4>
                    <ul className="space-y-2">
                      {result.characteristics.map((char: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> This is an AI-powered prediction. For critical decisions, 
                      please consult with a veterinarian or livestock expert.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}