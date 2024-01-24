import Tag from './components/common/Tag';
import styles from './App.module.scss';
import ProgressBar from './components/common/ProgressBar';

function Test() {
  return (
    <div className={styles['test']}>
      <Tag>状态</Tag>
      <ProgressBar
        min={0}
        max={100}
        value={62}
        color={'red'}
      >
        <span>62%</span>
      </ProgressBar>
    </div>
  );
}

function App() {
  return (
    <div className={styles['app']}>
      <Test />
    </div>
  );
}

export default App;
