export const formatTime = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

const formatNumber = (n: number) => {
  const s = n.toString();
  return s[1] ? s : "0" + s;
};

export function preloadImages(imagePaths: string | string[]) {
  // Convert single image path to an array
  if (!Array.isArray(imagePaths)) {
    imagePaths = [imagePaths];
  }

  // Iterate over the image paths and preload each image
  imagePaths.forEach((path) => {
    wx.getImageInfo({
      src: path,
      success(res) {},
      fail(err) {
        console.error("Failed to preload image:", err);
      },
    });
  });
}
