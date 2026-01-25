import * as React from 'react';

interface ContactEmailProps {
    name: string;
    email: string;
    message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
    name,
    email,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#1a202c' }}>
        <h2 style={{ color: '#2d3748', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
            Nuevo mensaje desde el portafolio
        </h2>
        <p><strong>De:</strong> {name}</p>
        <p><strong>Correo electrónico:</strong> {email}</p>
        <div style={{ marginTop: '20px', padding: '15px', background: '#f7fafc', borderRadius: '5px' }}>
            <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
        </div>
        <hr style={{ marginTop: '30px', border: 'none', borderTop: '1px solid #e2e8f0' }} />
        <p style={{ fontSize: '12px', color: '#718096' }}>
            Este mensaje fue enviado desde el formulario de contacto de krakendev.cl
        </p>
    </div>
);
