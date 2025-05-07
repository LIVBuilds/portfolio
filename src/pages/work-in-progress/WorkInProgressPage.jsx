import './WorkInProgress.css';

const WorkInProgressPage = ({ }) => {
  return (
    <div className={'v-background'}>
      <div className={'v-content'}>
        <div className={'v-text-wrapper-2'}>
          <span className={'v-wip-sub-text'}>Liv - Future architect</span>
        </div>
        <div className={'v-text-wrapper'}>
          <div className={'v-text-line-guard'}></div>
          <span className={'v-wip-text'}>UNDER CONSTRUCTION</span>
          <div className={'v-text-line-guard'}></div>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgressPage;