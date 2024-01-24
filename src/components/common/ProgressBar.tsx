import { ReactNode } from 'react';
import styles from './ProgressBar.module.scss';

type Props = {
  min?: number;
  max?: number;
  value?: number;
  color?: string;
  width?: string|number;
  height?: number;
  children: ReactNode;
};
export default function ProgressBar({
  min,
  max,
  color,
  width = '100%',
  height = 20,
  value,
  children,
}: Props) {
  const meterHeight = height * 2;
  const meterMargin = height / 2;

  let percentValue = 0;
  if (min != undefined && max != undefined && value != undefined) {
    const delta = max - min;
    const actual = value - min;
    percentValue = actual * 100 / delta;
  }
  const percent = `${percentValue.toFixed(2)}%`;

  const progress = (
    <progress
      className={styles["progress"]}
      max={max}
      value={value}
      style={{
        width: width,
        height: meterHeight,
        marginTop: -meterMargin,
        marginBottom: -meterMargin,
      }}
    />
  );

  return (
    <div className={styles['progress-bar']} style={{
      width: width,
      height: height,
    }}>
      <div className={styles['bar']} style={{
        width: width,
        height: height,
        clipPath: `inset(0 round ${height/2}px)`,
      }}>
        <div style={{
          width: percent,
          height: height,
          backgroundColor: color,
        }}></div>
      </div>
      <div 
        className={styles["text"]} 
        style={{
          width: width,
          height: height,
          marginTop: -height,
          fontSize: height*0.7,
        }}
      >
        { children }
      </div>
    </div>
  );
}
