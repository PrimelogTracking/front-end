import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const monthPtBr = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

class DateHelper {
  private readonly date: Date;

  constructor(date: Date | string) {
    this.date = new Date(date);
  }

  public getToday(): Date {
    return new Date();
  }

  public getDay(): number {
    if (this.date) {
      return this.date.getDate();
    }
    return 0;
  }

  public getMonth(): string {
    if (this.date) {
      return monthPtBr[this.date.getMonth()];
    }
    return '';
  }

  public formatBr(): string {
    if (this.date) {
      return this.date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    }
    return '';
  }

  public formatDayAndMouthTotBr(): string {
    if (this.date) {
      return this.date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      });
    }
    return '';
  }

  public formatTime(): string {
    if (this.date) {
      return format(this.date, 'HH:mm', { locale: ptBR });
    }
    return '';
  }

  public formatDateWithHours(): string {
    if (!this.date) return '';

    const dateString = this.date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const timeString = this.date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${dateString} às ${timeString}`;
  }

  public formatDateToISO(): string {
    if (!this.date) return '';

    const dataISO: string = this.date.toISOString();
    const dateFormatted: string = dataISO.split('T')[0];

    return dateFormatted;
  }

  public getHour(): string {
    if (!this.date) {
      return '';
    }

    const hour = this.date.getHours();
    const hourString = hour < 10 ? '0' + hour : hour.toString();
    return hourString;
  }

  public moreThan24HoursAgo(): boolean {
    if (!this.date) return false;

    const now: Date = new Date();

    const diff: number = now.getTime() - this.date.getTime();

    const hoursDifference: number = diff / (1000 * 60 * 60);

    return hoursDifference > 24;
  }

  public formatDayAndMonth(): string {
    if (this.date) {
      const day = this.date.getDate();
      const month = this.date.getMonth() + 1;
      const dayString = day < 10 ? '0' + day : day.toString();
      const monthString = month < 10 ? '0' + month : month.toString();
      return `${dayString}/${monthString}`;
    }
    return '';
  }

  public isToday(): boolean {
    if (!this.date) return false;

    const today = new Date();
    return (
      this.date.getDate() === today.getDate() &&
      this.date.getMonth() === today.getMonth() &&
      this.date.getFullYear() === today.getFullYear()
    );
  }

  public isTomorrow(): boolean {
    if (!this.date) return false;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return (
      this.date.getDate() === tomorrow.getDate() &&
      this.date.getMonth() === tomorrow.getMonth() &&
      this.date.getFullYear() === tomorrow.getFullYear()
    );
  }

  public isFuture(): boolean {
    if (!this.date) return false;

    const now = new Date();

    return this.date.getTime() > now.getTime();
  }
}

export default DateHelper;
