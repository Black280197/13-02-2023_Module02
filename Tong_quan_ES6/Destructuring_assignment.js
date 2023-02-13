let profile = {
    fname: 'Code',
    lname: 'Gym',
    bday: new Date('1979-01-02')
}
/*let fname = profile.fname;
let lname = profile.lname;*/
const {fname, lname} = profile;
console.log(fname, lname);