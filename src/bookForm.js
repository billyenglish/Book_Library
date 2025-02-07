export const createBook = document.querySelector("#create-book");
export const openBookForm = document.querySelector("dialog");
export const closeBookForm = document.querySelector(".close-form");

export function openBookModal() {
    openBookForm.showModal();
}

export function closeBookModal() {
    openBookForm.close()
}

