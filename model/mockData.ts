import artikel1 from "assets/artikel1.png"
import artikel2 from "assets/artikel2.png"
import artikel3 from "assets/artikel3.png"
import artikel4 from "assets/artikel4.png"

import buah from "assets/buah.png"
import croissant from "assets/croissant.png"
import donat from "assets/donat.png"
import other from "assets/other.png"
import pastry from "assets/pastry.png"
import sayur from "assets/sayur.png"

import { FoodI } from "./foodInterface"
import { MockCategoryI, MockDataArtikelI } from "./mockDataInterface"

export const artikelData: MockDataArtikelI[] = [
  {
    image: artikel1,
    title: "Siapkan Makananmu",
    desc: "pastikan makanan yang akan kamu donasikan masih layak konsumsi ya",
  },
  {
    image: artikel2,
    title: "Isi informasi tentang makananmu",
    desc: "Isikan informasi tentang makanan yang akan kamu donasikan seperti tanggal pembelian, kualitas, dlla",
  },
  {
    image: artikel3,
    title: "Upload foto makananmu",
    desc: "Ambil gambar makanan yang akan kamu donasikan, kami akan bantu menilai kelayakannya",
  },
  {
    image: artikel4,
    title: "Kami akan menjemput makananmu",
    desc: "Setelah makanan yang kami nilai layak untuk di donasikan, tim kami akan menjemputnya",
  },
]

export const categoryData: MockCategoryI[] = [
  {
    image: buah,
    name: "Buah",
    id: "fruit",
  },
  {
    image: sayur,
    name: "Sayur",
    id: "vegetable",
  },
  {
    image: pastry,
    name: "Pastry",
    id: "pastry",
  },
  {
    image: other,
    name: "other",
    id: "others",
  },
]

export const foodData: FoodI[] = [
  {
    id: "1",
    name: "3 Croissant",
    category: "",
    purchaseDate: "",
    storedIn: "",
    formQuality: "Baik",
    tasteQuality: "Baik",
    description: "",
    image: croissant,
  },
  {
    id: "2",
    name: "2 Donat",
    category: "",
    purchaseDate: "",
    storedIn: "",
    formQuality: "Baik",
    tasteQuality: "Baik",
    description: "",
    image: donat,
  },
  {
    id: "3",
    name: "5 Apel",
    category: "",
    purchaseDate: "",
    storedIn: "",
    formQuality: "Baik",
    tasteQuality: "Baik",
    description: "",
    image: croissant,
  },
]
