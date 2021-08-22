class Utils {
    public numberWithCommas(x: string) {
        return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
}

export default new Utils();
