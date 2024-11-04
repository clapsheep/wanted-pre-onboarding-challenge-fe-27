interface T {
  id: string;
  type?: string;
  children: React.ReactNode;
  autoComplete?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({
  id,
  type = "text",
  children,
  autoComplete,
  value,
  onChange,
}: T) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {children}
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type={type}
        name={id}
        id={id}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
