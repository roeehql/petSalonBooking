import { useState, useCallback, useEffect } from "react";

export interface ToastState {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
}

const Toast = ({ isSuccess, title }: { isSuccess: boolean; title: string }) => {
  const [toastList, setToastList] = useState<ToastState[]>([]);
  let toastProperties = null;

  const deleteToast = useCallback(
    (id: number) => {
      const toastListItem = toastList.filter((e) => e.id !== id);
      setToastList(toastListItem);
    },
    [toastList, setToastList]
  );

  const handleToast = () => {
    if (isSuccess) {
      toastProperties = {
        id: toastList.length + 1,
        title: `${title}`,
        description: "감사합니다:)",
        backgroundColor: "#5cb85c",
      };
    } else {
      toastProperties = {
        id: toastList.length + 1,
        title: `${title}`,
        description: "죄송합니다. 다시 시도해주세요",
        backgroundColor: "#d9534f",
      };
    }
    setToastList([...toastList, toastProperties]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);

  useEffect(() => {
    if (toastList.length !== 0) {
      handleToast();
    }
  });

  return (
    <div className="absolute bottom-4 right-4 text-base z-10">
      {toastList.map((toast, i) => (
        <div
          key={i}
          className="w-80 h-fit bottom-4 right-4 mb-4 rounded shadow opacity-90 duration-300 hover:opacity-100 animate-toast"
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button
            className="w-full text-right p-3 text-white font-semibold"
            onClick={() => deleteToast(toast.id)}
          >
            X
          </button>
          <div className="w-full py-4 px-5 bg-white">
            <p className=" w-80 h-5 mb-2 font-bold text-base">{toast.title}</p>
            <p className="text-right tracking-tighter">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toast;
