type Account = {
  name: string;
  description: string;
  fitScore: number;
  reasoning: string;
};

type Props = {
  account: Account;
  onRemove: () => void;
};

export const AccountCard = ({ account, onRemove }: Props) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800">{account.name}</h3>
        <button onClick={onRemove} className="text-xs text-red-500 hover:underline">Remove</button>
      </div>
      <p className="text-sm text-gray-600">{account.description}</p>
      <p className="text-xs text-blue-700 italic mt-1">Reasoning: {account.reasoning}</p>
      <span className="text-xs font-medium text-blue-600 mt-1 block">Fit Score: {account.fitScore}%</span>
    </div>
  );
};
