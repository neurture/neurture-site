'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ReportViewer() {
  const [markdown, setMarkdown] = useState('');
  const [viewMode, setViewMode] = useState<'input' | 'preview'>('input');

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const text = await file.text();
      setMarkdown(text);
      setViewMode('preview');
    }
  };

  const handlePaste = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const handleClear = () => {
    setMarkdown('');
    setViewMode('input');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Weekly Report Viewer</h1>
              <p className="mt-1 text-sm text-gray-600">
                Upload or paste your markdown weekly summary
              </p>
            </div>
            <a
              href="/"
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              ← Back to Neurture
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {viewMode === 'input' && !markdown ? (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Markdown File
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">.md or .txt files</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept=".md,.txt"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              {/* Text Paste */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Paste Markdown Content
                </label>
                <textarea
                  className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none font-mono text-sm"
                  placeholder="Paste your markdown content here..."
                  value={markdown}
                  onChange={handlePaste}
                />
              </div>

              {markdown && (
                <button
                  onClick={() => setViewMode('preview')}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Preview Report
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleClear}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                ← Load Different Report
              </button>
              <button
                onClick={() => setViewMode(viewMode === 'input' ? 'preview' : 'input')}
                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium"
              >
                {viewMode === 'input' ? 'Preview' : 'Edit'}
              </button>
            </div>

            {/* Content */}
            {viewMode === 'input' ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <textarea
                  className="w-full h-[600px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none font-mono text-sm"
                  value={markdown}
                  onChange={handlePaste}
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="prose prose-green max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 pb-4 border-b border-gray-200">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="ml-4">
                          {children}
                        </li>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-gray-900">
                          {children}
                        </strong>
                      ),
                      hr: () => (
                        <hr className="my-8 border-t-2 border-gray-200" />
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 my-4">
                          {children}
                        </blockquote>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-green-600 hover:text-green-700 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {markdown}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-sm font-semibold text-green-900 mb-2">
            💡 About This Tool
          </h3>
          <p className="text-sm text-green-800">
            This viewer renders weekly summary reports generated by the Neurture mobile app.
            Upload a <code className="bg-green-100 px-1 rounded">.md</code> file or paste markdown content
            to see a beautifully formatted version of your report.
          </p>
        </div>
      </div>
    </div>
  );
}
