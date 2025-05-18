const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || "";
      const count = +counter.innerText.replace(/[^\d.]/g, ''); // bỏ dấu + %

      const increment = target > 100 ? target / 100 : 1;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target + suffix;
      }
    };

    updateCount();
  });