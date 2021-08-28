class Utils {
    public numberWithCommas(x: string) {
        const parts = String(+(+x).toFixed(3)).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
}

export default new Utils();
