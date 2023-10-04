const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() 
{
  const trigger= ((80/100)*window.innerHeight) ;

  boxes.forEach((box) => {
    const Top = box.getBoundingClientRect().top;

    if (Top < trigger) 
    {
      box.classList.add("show");
    } 
    else {
      box.classList.remove("show");
    }
  });
}
