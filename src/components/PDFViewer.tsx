import React from 'react';

interface PDFViewerProps {
    src: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ src }) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingTop: '141.4%' }}>  {/* Aspect ratio for A4 */}
                <iframe
                    src={src}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 'none' }}
                    title="PDF viewer"
                />
            </div>
        </div>
    );
};

export default PDFViewer;
