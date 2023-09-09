import { useState } from 'react';

interface ITemperatureConverterProps {
  RenderKelvin: React.FC<{ value: number }>;
  RenderFahrenheit: React.FC<{ value: number }>;
}

export default function TemperatureConverter({ RenderFahrenheit, RenderKelvin }: ITemperatureConverterProps) {
  const [value, setValue] = useState(0);

  return (
    <div className="card">
      <input type="number" placeholder="Degrees Celcius" onChange={(e) => setValue(parseInt(e.target.value))} />
      <RenderKelvin value={Math.floor(value + 273.15)} />
      <RenderFahrenheit value={Math.floor((value * 9) / 5 + 32)} />
    </div>
  );
}
