export function formatDate(isoString: string): string {
    const data = new Date(isoString)
    const formatter = new Intl.DateTimeFormat('en-EN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return formatter.format(data)
}