class Utils {
    public numberWithCommas(x: string) {
        return String(+(+x).toFixed(3)).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
}

export default new Utils();
