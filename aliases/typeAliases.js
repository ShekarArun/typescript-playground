function giveLength(ip) {
    console.log(ip.length);
}
giveLength("127.0.0.1");
const localHost = "127.0.0.1";
giveLength(localHost);
function getId(id) { }
function setId(id) { }
function validId(id) { }
function execute(code, error) {
    if (!code(1, "Name1")) {
        error("Does not work");
    }
}
const myAlgorithm = (id, name) => {
    return false;
};
const errorHandling2 = (message) => {
    console.log(message);
};
execute(myAlgorithm, errorHandling2);
