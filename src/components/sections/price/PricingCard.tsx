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
        className={`flex flex-col justify-between rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl ${
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
          <ul className="space-y-3 mb-6">
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
          className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
            highlight
              ? "bg-eipp-secondary text-white hover:bg-eipp-primary"
              : "bg-eipp-secondary text-white hover:bg-eipp-primary"
          }`}
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
        const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
          name
        )}&am=${amount}&cu=INR`;

        await QRCode.toCanvas(canvasRef.current, upiUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        });
        setQrError(false);
      } catch (err) {
        console.error("Error generating QR code:", err);
        setQrError(true);
      }
    };

    generateQRCode();
  }, [upiId, amount, name]);

  if (qrError) {
    return (
      <div className="flex flex-col items-center justify-center w-48 h-48 border-2 border-dashed border-red-300 bg-red-50 rounded-lg">
        <div className="text-center text-red-600">
          <div className="text-lg font-bold">QR Error</div>
          <div className="text-sm mt-2">Failed to generate QR code</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center ">
      <canvas ref={canvasRef} className="border border-gray-200 rounded-lg" />
      <div className="mt-4 text-center">
        <p className="text-sm font-semibold text-gray-700">UPI ID: {upiId}</p>
        <p className="text-sm text-gray-600 mt-2">Amount: ₹{amount}</p>
        <p className="text-xs text-gray-500 mt-3">
          Scan this QR code with any UPI app to pay
        </p>
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
  const numericPrice = parseFloat(price.replace(/[^\d.]/g, "")) || 0;

  const upiId = "abdulofficialbtw@okaxis";
  const merchantName = "Your Business Name";

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-linear-to-br from-black/20 to-white/10 backdrop-blur-lg flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Complete Payment</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            ×
          </button>
        </div>
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">
            Plan:{" "}
            <span className="font-semibold text-gray-800">{planTitle}</span>
          </p>
          <p className="text-lg font-bold text-gray-800 mt-1">
            Amount: {price}
          </p>
        </div>

        <QRCodeDisplay
          upiId={upiId}
          amount={numericPrice.toString()}
          name={merchantName}
        />

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-blue-800 mb-2">How to Pay:</h4>
          <ol className="text-sm text-blue-700 list-decimal list-inside space-y-2">
            <li>Open your UPI app (GPay, PhonePe, Paytm, etc.)</li>
            <li>Tap on "Scan QR Code"</li>
            <li>Point your camera at the QR code</li>
            <li>Verify amount and merchant details</li>
            <li>Enter your UPI PIN to confirm payment</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
