export const layout = "layouts/work-item.html";

export function currentDate() {
	const stringDate = new Date().toISOString();
    const date = new Date(stringDate);
	return (date);
};
