interface KelvinProps {
  value: number;
}

export function Kelvin({ value }: KelvinProps) {
  return (
    <div className="temp-card">
      The temperature in Kelvin is: <span className="temp">{value}K</span>
    </div>
  );
}
