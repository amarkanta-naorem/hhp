export function FormatDatetime(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
}

export function TimeAgo(datetime: string): string {
    const getTimeAgo: (datetime: string) => string = (datetime: string): string => {
        const now: any = new Date();
        const time: any = new Date(datetime);
        const diff: any = now - time;

        const seconds: number = Math.floor(diff / 1000);
        const minutes: number = Math.floor(seconds / 60);
        const hours: number = Math.floor(minutes / 60);
        const days: number = Math.floor(hours / 24);
        const months: number = Math.floor(days / 30);
        const years: number = Math.floor(days / 365);

        if (seconds < 60) {
            return 'Just now';
        } else if (minutes < 60) {
            return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
        } else if (hours < 24) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (days < 30) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (months < 12) {
            return `${months} month${months > 1 ? 's' : ''} ago`;
        } else {
            return `${years} year${years > 1 ? 's' : ''} ago`;
        }
    };

    return getTimeAgo(datetime);
}