import Tag from '../common/Tag';
import ProgressBar from '../common/ProgressBar';

import Task, { Status } from '../../domains/Task';
import styles from './TaskView.module.scss';

export default function TaskView() {
  const task = {
    id: 'tg-1',
    url: '',
    fileName: '001.png',
    status: Status.Pending,
  } as Task;

  const statusColor = 'gray';
  const statusText = '未知';

  return (
    <div className={styles['task-view']}>
      <div className={"file-name"}>
        <span>{task.fileName}</span>
      </div>
      <div className={"status"}>
        <Tag color={statusColor}>{statusText}</Tag>
      </div>
      <div className={"progress"}>
        <ProgressBar
          min={0}
          max={task.total}
          value={task.loaded}
          color={statusColor}
        />
      </div>
    </div>
  )
}