import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  ifSummer(currentDay, currentMonth) {
    if ((currentMonth == 6) || (currentMonth == 7)) {
      return true;
    } else if ((currentMonth == 5) && (currentDay >= 21)) {
      return true;
    } else if ((currentMonth ==8) && (currentDay <= 23)) {
      return true;
    } else {
      return false;
    }
  }

  getCountDownDays(currentDate) {
    const nextSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));

    if ((nextSummer.getTime() - currentDate.getTime()) < 0)  {
      nextSummer.setUTCFullYear(currentDate.getUTCFullYear() + 1);
    }

    const days = (nextSummer.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

    return Math.ceil(days);
  }

  render() {
    const currentDate = new Date();
    const currentDay = currentDate.getUTCDate();
    const currentMonth = currentDate.getUTCMonth();

    const summer = this.ifSummer(currentDay, currentMonth);

    const daysNumber = this.getCountDownDays(currentDate);

    let dayString = 'days';

    if (daysNumber === 1) {
      dayString = 'day';
    }

    //{currentDay + ' ' + dayString + ' to summer'}
    

    return(
      <div className = {styles.component}>
        <h3 className={styles.description}>
          {summer
            ? ''
            : daysNumber + ' ' + dayString + ' to summer'
          }
        </h3>
      </div>
    );
  }
}

export default DaysToSummer;