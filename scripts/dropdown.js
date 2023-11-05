document.addEventListener("DOMContentLoaded", () => {
    const profiilipildid = document.getElementsByClassName("navigeerimisePilt");
    for (let profiilipilt of profiilipildid) {
        profiilipilt.addEventListener('click', () => {
            const pildiVanem = profiilipilt.parentNode;
            if (pildiVanem.children.length === 1) {
                const uusDiv = document.createElement('div');
                const uusTekst1 = document.createElement('a');
                const uusTekst2 = document.createElement('a');
                const uusTekst3 = document.createElement('a');
                uusTekst1.innerText = "John Doe\n";
                uusTekst2.innerText = "john.doe@ut.ee\n";
                uusTekst3.innerText = "logout";
                uusDiv.appendChild(uusTekst1);
                uusDiv.appendChild(uusTekst2);
                uusDiv.appendChild(uusTekst3);
                uusDiv.className = "profiilikaDropdown-active";
                pildiVanem.appendChild(uusDiv);
            } else {
                for (let activeDropdown of document.getElementsByClassName("profiilikaDropdown-active")) {
                    activeDropdown.remove();
                }
            }
        })
    }
})