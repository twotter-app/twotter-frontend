import './CharStyle.css';
import { CircularProgressbar } from 'react-circular-progressbar';
interface CharCounterProps {
  value: number;
  maxValue: number;
}

const CharCounter: React.FC<CharCounterProps> = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="h-6 w-6">
      <CircularProgressbar value={percentage} />
    </div>
  );
};

export default CharCounter;
