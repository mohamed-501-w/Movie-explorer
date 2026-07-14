
export default function dateFormat(date) {
    
    const newDate = new Date(date || null)

    return new Intl.DateTimeFormat("en-GB").format(newDate)
}