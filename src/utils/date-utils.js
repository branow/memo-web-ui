export { periodToShortString };

const DateUnit = Object.freeze(
  {
    Year: (1000 * 60 * 60 * 24 * 365),
    Month: (1000 * 60 * 60 * 24 * 31),
    Day: (1000 * 60 * 60 * 24),
    Hour: (1000 * 60 * 60),
    Minute: (1000 * 60),
    Second: (1000),
  }
)

function getDateUnitSign(unit) {
  const map = new Map();
  map.set(DateUnit.Year, 'y');
  map.set(DateUnit.Month, 'm');
  map.set(DateUnit.Day, 'd');
  map.set(DateUnit.Hour, 'h');
  map.set(DateUnit.Minute, 'm');
  map.set(DateUnit.Second, 's');
  return map.get(unit);
}



class Period {
  constructor(date1, date2) {
    const p = date1.getTime() - date2.getTime();
    this.years = Math.floor(p / DateUnit.Year);
    this.months = Math.floor( (p - this.years * DateUnit.Year) / DateUnit.Month );
    this.days = Math.floor( (p - this.years * DateUnit.Year - this.months * DateUnit.Month) / DateUnit.Day );
    this.hours = Math.floor( (p - this.years * DateUnit.Year - this.months * DateUnit.Month - this.days  * DateUnit.Day) / DateUnit.Hour);
    this.minutes = Math.floor( (p - this.years * DateUnit.Year - this.months * DateUnit.Month - this.days  * DateUnit.Day - this.hours  * DateUnit.Hour) / DateUnit.Minute);
    this.seconds = Math.floor( (p - this.years * DateUnit.Year - this.months * DateUnit.Month - this.days  * DateUnit.Day - this.hours  * DateUnit.Hour - this.minutes * DateUnit.Minute) / DateUnit.Second);
  }
  toList() {
    return [
      {
        interval: DateUnit.Year,
        number: this.years
      },
      {
        interval: DateUnit.Month,
        number: this.months
      },
      {
        interval: DateUnit.Day,
        number: this.days
      },
      {
        interval: DateUnit.Hour,
        number: this.hours
      },
      {
        interval: DateUnit.Minute,
        number: this.minutes
      },
      {
        interval: DateUnit.Second,
        number: this.seconds
      }
    ];
  }
}

function periodToShortString(date1, date2) {
  const p = new Period(date1, date2);
  const dates = [];
  for (let unit of p.toList()) {
    if (dates.length >= 2) {
      break;
    }
    if (unit.number !== 0) {
      dates.push(unit.number + getDateUnitSign(unit.interval));
    }
  }
  return dates.join(" ");
}

