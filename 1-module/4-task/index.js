function checkSpam(str) {
    var lower = str.toLowerCase();
    if (~lower.indexOf('xxx') || ~lower.indexOf('now')) {
        return true;
    }
    return false;
}