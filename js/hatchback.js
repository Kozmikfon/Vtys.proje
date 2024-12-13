document.addEventListener("DOMContentLoaded", async function () {
    const carList = document.getElementById("car-list");
  
    async function fetchHatchbackCars() {
      carList.innerHTML = "<p>Veriler yükleniyor...</p>";
  
      try {
        const response = await fetch("http://localhost:5007/api/cars/filter?kasaTipi=Hatchback/5");
        const cars = await response.json();
  
        carList.innerHTML = ""; // Önceki içeriği temizle
  
        if (cars.length === 0) {
          carList.innerHTML = "<p>Hiç Hatchback araç bulunamadı.</p>";
          return;
        }
  
        cars.forEach((car) => {
          const carItem = document.createElement("div");
          carItem.classList.add("car-item");
          carItem.innerHTML = `
            <h2>${car["Ürün Adı"] || "Bilinmeyen Ürün Adı"}</h2>
            <p><strong>Fiyat:</strong> ${car.Fiyat || "Bilinmiyor"}</p>
            <p><strong>Marka:</strong> ${car.Marka || "Bilinmiyor"}</p>
            <p><strong>Model:</strong> ${car.Model || "Bilinmiyor"}</p>
            <p><strong>Yıl:</strong> ${car["Yıl"] || "Bilinmiyor"}</p>
          `;
          carList.appendChild(carItem);
        });
      } catch (error) {
        console.error("Veriler alınırken bir hata oluştu:", error);
        carList.innerHTML = "<p>Veri alınırken bir sorun oluştu.</p>";
      }
    }
  
    fetchHatchbackCars(); // Hatchback araçlarını getir
  });
  