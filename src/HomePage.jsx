import DailyNorma from './DailyNorma';
import WaterRatioPanel from './WaterRatioPanel';
import TodayWaterList from './TodayWaterList';
import MonthStatsTable from './MonthStatsTable';
import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <div className={css.container}>
        <div className={css.dailyNorma }><DailyNorma /></div>
        <div className={css.waterRatioPanel}><WaterRatioPanel /></div>
        <div className={css.listAndTable}>
            <TodayWaterList />
            <MonthStatsTable />
        </div>
        </div>
    )
};