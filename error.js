module.exports = function (msg) {
    var err = Error(msg);
    err.name = 'UnimplementedAPIActionError';
    return err;
};
