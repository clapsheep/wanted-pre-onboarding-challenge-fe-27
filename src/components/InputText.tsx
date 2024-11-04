interface T {
  id: string;
  children: React.ReactNode;
}
const InputText = ({ id, children }: T) => {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input className="border" type="text" name={id} id={id} />
    </div>
  );
};
export default InputText;
