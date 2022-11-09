class DataVolunteer {
    constructor (id, email, password, nama, kota_kelahiran, tanggal_lahir, 
        gender, alamat_rumah, kota, no_hp, email, nik, no_kk) {
    
        super(id, email, password);
        this.nama = nama;
        this.kota_kelahiran = kota_kelahiran;
        this.tanggal_lahir = tanggal_lahir;
        this.gender = gender;
        this.alamat_rumah = alamat_rumah;
        this.kota = kota;
        this.no_hp = no_hp;
        this.email = email;
        this.nik = nik;
        this.no_kk = no_kk;
    }

    addEvent() {
        console.log( 'can add Event');
    }

    deleteEvent() {
        console.log( 'can delete Event');
    }

    inputEvent() {
        console.log( 'can input Event');
    }

    changeDataVolunteer() {
        console.log( 'can change data pendonor');
    }
}
