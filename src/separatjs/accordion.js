// accordionLogic.js
import { useEffect } from 'react';

export const useAccordionLogic = () => {
  useEffect(() => {
    const accordions = document.querySelectorAll(".onefolder");

    const observerCallback = (mutationsList, observer) => {
      mutationsList.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.classList && node.classList.contains('onefolder')) {
              node.addEventListener("click", () => {
                node.classList.toggle("active");
              });
            }
          });
        }
      });
    };

    const observer = new MutationObserver(observerCallback);
    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up observer when component unmounts
    return () => {
      observer.disconnect();
    };

  }, []);
};