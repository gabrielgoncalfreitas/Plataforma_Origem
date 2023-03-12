export default function formGetAll(e) {
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData.entries());

    return dataObject;
}