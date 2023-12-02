# Lab5Web
# Lab5Web + Javascript
## Profil
| Variable | Isi |
| -------- | --- |
| **Nama** | Ricky alfian saputra |
| **NIM** | 312210279 |
| **Kelas** | TI.22.A4 |
| **Mata Kuliah** | Pemrograman WEB |

### Instruksi Praktikum
1. Persiapkan text editor misalnya VSCode.
2. Buat folder baru dengan nama lab5_javascript.
3. Ikuti langkah-langkah praktikum yang akan dijelaskan berikutnya.

### Pertanyaan dan Tugas
1. Buat script untuk melakukan validasi pada isian form

### Jawaban : [Sourcecode](https://github.com/ricky1211/Lab5Web/blob/main/form_valiadation.html)

**Hasil tugas :**

![T](https://github.com/ricky1211/Lab5Web/blob/main/LAB5/Screenshot%20(364).png?raw=true) 
![T](https://github.com/ricky1211/Lab5Web/blob/main/LAB5/Screenshot%20(346).png?raw=true) 
![T](https://github.com/ricky1211/Lab5Web/blob/main/LAB5/Screenshot%20(347).png?raw=true) 
![T](https://github.com/ricky1211/Lab5Web/blob/main/LAB5/Screenshot%20(348).png?raw=true) 
![T](https://github.com/ricky1211/Lab5Web/blob/main/LAB5/Screenshot%20(349).png?raw=true) 


# Langkah-langkah Praktikum
## Persiapan membuat dokumen HTML dengan nama file lab5_javascript.html seperti berikut.
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Mengenal JavaScript</title>
</head>

<body>
    <h1>Pengenalan JavaScript</h1>
    <h3>Contoh document.write dan console.log</h3>
    <script>
        document.write("Hello World");
        console.log("Hello World");
    </script>
</body>

</html>
```
**Hasil :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(350).png?raw=true)

#### *Note :*


## Pemakaian Alert sebagai property window
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>alert box</title>
</head>
<body>
    <!-- Pemakaian Alert sebagai property window -->
    <script language = "javascript">
        window.alert("ini merupakan pesan untuk anda")
    </script>
</body>
</html>
```
**Hasil :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(351).png?raw=true)

#### *Note :*

## Pemakaian method dalam objek
```HTML
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>skrip javascript</title>
        </head>
        <body>
            percobaan memakai javascript:<br>
            <script language = "javascript">
                document.write("selamat mencoba javascript<br>");
                document.write("semoga sukses!");
            </script>
        </body>
    </html>
```
**Hasil :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(352).png?raw=true)

#### *Note :*

## Pemakaian Prompt
```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>pemasukan data</title>
    </head>
    <body>
        <script language = "javascript">
            var nama = prompt("siapa nama anda?", "masukkan nama anda");
            document.write("hai, " + nama);
        </script>
    </body>
</html>
```
**Hasil :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(365).png?raw=true)

**Hasil Setelah kita klik OK :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(353).png?raw=true)


## Dasar Pemrograman Di Javascript
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contoh program JavaScript</title>
    <script language = "javascript">
        function test (val1, val2){
            document.write("<br>" + "perkalian : val1 * val2" + "<br>")
            document.write(val1*val2)
            document.write("<br>" + "pembagian : val1 / val2" + "<br>")
            document.write(val1/val2)
            document.write("<br>" + "penjumlahan : val1 + val2" + "<br>")
            document.write(val1+val2)
            document.write("<br>" + "pengurangan : val1 - val2" + "<br>")
            document.write(val1-val2)
            document.write("<br>" + "modulus : val1 % val2" + "<br>")
            document.write(val1%val2)
        }
    </script>
</head>
<body>
    <input type="button" name="button1" value="arithmetic" onclick=test(9,4)>
</body>
</html>
```
**Hasil :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(354).png?raw=true)

#### *Note :*
Operasi dasar aritmatika.

## Seleksi kondisi (if..else)
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contoh if-else</title>
</head>
<body>
    <script language="javascript">
        var nilai = prompt("nilai (0-100): ", 0);
        var hasil = "";
        if (nilai >= 60)
        hasil = "lulus";
        else
        hasil = "tidak lulus";
        document.write("hasil: " + hasil);
    </script>
</body>
</html>
```
**Hasil :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(366).png?raw=true)

**Hasil Setelah kita klik OK :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(355).png?raw=true)

#### *Note :*

## Penggunaan operator switch untuk seleksi kondisi
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contoh program javascript</title>

    <script language = "javascript">
        function test (){
            val1 = window.prompt("input nilai (1-5)")
            switch (val1){
                case "1" : 
                    document.write("bilangan satu")
                    break
                case "2" : 
                    document.write("bilangan dua")
                    break
                case "3" : 
                    document.write("bilangan tiga")
                    break
                case "4" : 
                    document.write("bilangan empat")
                    break
                case "5" : 
                    document.write("bilangan lima")
                    break
                default : 
                    document.write("bilangan lainnya")
            }
        }
    </script>
</head>
<body>
    <input type="button" name="button1" value="switch" onclick=test()>
</body>
</html>
```
**Hasil :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(356).png?raw=true)
**Setelah di tekan ok :**
![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(357).png?raw=true)

#### *Note :*

## Pembuatan Form
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form input</title>

    <script language="javascript">
        function test () {
            var val1 = document.kirim.T1.value
            if (val1%2==0)
                document.kirim.T2.value = "bilangan genap"
            else   
                document.kirim.T2.value = "bilangan ganjil"
        }
    </script>
</head>
<body>
    <form method="POST" name="kirim">
        <p>BIL <input type="text" name="T1" size="20">
        MERUPAKAN BIL <input type="text" name="T2" size="20"></p>
        <p><input type="button" name="B1" value="TEBAK" onclick=test()></p>
    </form>
</body>
</html>
```
**Hasil :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(358).png?raw=true)

#### *Note :*
Form Input

## Form Button
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Objek document</title>
</head>

<body>
    <script language="JavaScript">
        <!--
        function ubahWarnaLB(warna) {
            document.bgColor = warna;
        }
        function ubahWarnaLD(warna) {
            document.fgColor = warna;
        }
        //
        -->
    </script>

    <h1>tes</h1>
    <form>
        <input type="button" value="Latar Belakang Hijau" onClick="ubahWarnaLB('GREEN')">
        <input type="button" value="Latar Belakang Putih" onClick="ubahWarnaLB('WHITE')">
        <input type="button" value="Text Kuning" onClick="ubahWarnaLD('YELLOW')">
        <input type="button" value="Text Biru" onClick="ubahWarnaLD('BLUE')">
    </form>
    <script language="JavaScript">
        <!--
        document.write("Dimodifikasi terakhir pada " +
            document.lastModified);
        //
        -->
    </script>
</body>

</html>
```
**Hasil :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(359).png?raw=true)
![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(360).png?raw=true)
![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(361).png?raw=true)


#### *Note :*

## HTML DOM
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Daftar Menu</title>
    <script>
        function hitung(ele) {
            var total = document.getElementById('total').value;
            total = (total ? parseInt(total) : 0);
            var harga = 0;

            if (ele.checked) {
                harga = ele.value;
                total += parseInt(harga);
            } else {
                harga = ele.value;
                if (total > 0)
                    total -= parseInt(harga);

            }

            document.getElementById('total').value = total;
        }
    </script>
</head>

<body>
    <h1>Daftar Menu Makanan</h1>
    <label><input type="checkbox" value="5000" id="menu1" onclick="hitung(this);" />Ayam Goreng Rp. 5.000</label><br />
    <label><input type="checkbox" value="500" id="menu2" onclick="hitung(this);" />Tempe Goreng Rp. 500</label><br />
    <label><input type="checkbox" value="2500" id="menu3" onclick="hitung(this);" />Tempe Dadar Rp. 2.500</label><br />
    <strong>Total bayar: Rp. <input id="total" type="text" /></strong>
</body>

</html>
```
**Hasil :**

![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(362).png?raw=true)
![0.1](https://github.com/ricky1211/Lab5Web/blob/main/LAB5Tes/Screenshot%20(363).png?raw=true)

#### *Note :*
Pilihan menggunakan checkBox dengan perhitungan otomatis

**[---KEMBALI-->](#Profil)**