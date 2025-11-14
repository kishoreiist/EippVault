"use client";
import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";
import { tPricingPlan } from "@/src/constant/data";

const PricingCard: React.FC<tPricingPlan> = ({
  title,
  price,
  description,
  features,
  highlight = false,
  delivery,
}) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePayment = () => {
    setShowPaymentModal(true);
  };

  return (
    <>
      <div
        className={`flex flex-col justify-between rounded-2xl shadow-lg 
        p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl
        ${
          highlight
            ? "bg-linear-to-l from-eipp-primary to-eipp-secondary text-white scale-105"
            : "bg-white text-gray-800"
        }`}
      >
        <div>
          <div
            className={`uppercase text-m font-bold mb-4 tracking-wide ${
              highlight ? "text-gray-700" : "text-[#0066B3]"
            }`}
          >
            {title}
          </div>

          <h2 className="text-4xl font-bold mb-4 text-black">{price}</h2>

          <p className={`mb-6 ${highlight ? "text-black" : "text-gray-600"}`}>
            {description}
          </p>

          <ul className="space-y-2 sm:space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span
                  className={`text-lg ${
                    highlight ? "text-black" : "text-blue-600"
                  }`}
                >
                  •
                </span>
                <span className="text-black">{feature}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm opacity-80 mb-6 text-black">{delivery}</p>
        </div>

        <button
          onClick={handlePayment}
          className="w-full py-3 rounded-lg font-medium 
          bg-eipp-secondary text-white hover:bg-eipp-primary transition-all duration-300"
        >
          Click here to get started!
        </button>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        planTitle={title}
        price={price}
      />
    </>
  );
};


const QRCodeDisplay = ({
  upiId,
  amount,
  name,
}: {
  upiId: string;
  amount: string;
  name: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrError, setQrError] = useState(false);

  useEffect(() => {
    const generateQRCode = async () => {
      if (!canvasRef.current) return;

      try {
        const qrSize =
          typeof window !== "undefined" && window.innerWidth < 400 ? 130 : 180;

        const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
          name
        )}&am=${amount}&cu=INR`;

        await QRCode.toCanvas(canvasRef.current, upiUrl, {
          width: qrSize,
          margin: 2,
        });

        setQrError(false);
      } catch {
        setQrError(true);
      }
    };

    generateQRCode();
  }, [upiId, amount, name]);

  if (qrError) {
    return (
      <div className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-red-300 bg-red-50 rounded-lg">
        <p className="text-red-600 text-center text-sm">QR Error</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} className="border border-gray-300 rounded-lg" />
      <div className="mt-4 text-center">
        <p className="text-sm font-semibold text-gray-700">UPI ID: {upiId}</p>
        <p className="text-sm text-gray-600 mt-1">Amount: ₹{amount}</p>
      </div>
    </div>
  );
};



const PaymentModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  planTitle: string;
  price: string;
}> = ({ isOpen, onClose, planTitle, price }) => {
  if (!isOpen) return null;

  const numericPrice = parseFloat(price.replace(/[^\d]/g, "")) || 0;
  const upiId = "abdulofficialbtw@okaxis";
  const merchantName = "Your Business Name";

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center 
      justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
 
      <div
        className="bg-white rounded-2xl 
        p-4 sm:p-6 
        max-w-md w-full 
        max-h-[90vh] overflow-y-auto 
        text-sm sm:text-base"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold">Complete Payment</h3>
          <button
            onClick={onClose}
            className="text-xl font-bold hover:text-red-500"
          >
            ×
          </button>
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-sm sm:text-base">
            Plan: <span className="font-semibold">{planTitle}</span>
          </p>
          <p className="text-lg font-bold mt-1">{price}</p>
        </div>

        <QRCodeDisplay
          upiId={upiId}
          amount={numericPrice.toString()}
          name={merchantName}
        />

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-blue-900 mb-2">How to Pay:</h4>
          <ol className="text-sm text-blue-800 list-decimal list-inside space-y-1">
            <li>Open your UPI app(GPay / PhonePe / Paytm)</li>
            <li>Tap “Scan QR”</li>
            <li>Scan the QR code</li>
            <li>Verify amount</li>
            <li>Enter UPI PIN</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
