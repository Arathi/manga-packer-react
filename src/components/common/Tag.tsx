import { ReactNode } from "react";
import styles from './Tag.module.scss';

type Props = {
  color?: string;
  children: ReactNode;
};
export default function Tag({
  color = 'black',
  children,
}: Props) {
  return (
    <div className={styles['tag']} style={{
      color: color,
      borderColor: color,
      fontSize: '0.5em',
    }}>
      {children}
    </div>
  );
}
