'use client';

type CampaignProps = {
  accountName: string;
  messagingFramework: string;
  contentType: string;
  confidence: string;
};

export const CampaignCard = ({
  accountName,
  messagingFramework,
  contentType,
  confidence,
}: CampaignProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white space-y-1">
      <h3 className="text-sm font-medium text-gray-800">{accountName}</h3>
      <p className="text-sm text-gray-600">
        Messaging: <span className="font-semibold text-blue-600">{messagingFramework}</span>
      </p>
      <p className="text-sm text-gray-600">
        Content Type: <span className="font-semibold">{contentType}</span>
      </p>
      <p className="text-xs text-indigo-500 font-medium">
        Confidence: {confidence}
      </p>
    </div>
  );
};
