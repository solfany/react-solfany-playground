import React, { useEffect, useState } from "react";
import { ref, get, runTransaction } from "firebase/database";
import { database } from "../../firebase/firebase";

const VisitorCounter = ({ type = "total" }) => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        const todayKey = new Date().toISOString().split("T")[0];
        const sessionKey = `visited-${type}-${todayKey}`;

        const countRef =
            type === "today"
                ? ref(database, `views/daily/${todayKey}`)
                : ref(database, "views/total");

        const updateCount = async () => {
            const snap = await get(countRef);
            setCount(snap.exists() ? snap.val() : 0);
        };

        const increaseCount = async () => {
            await runTransaction(countRef, (current) => (current || 0) + 1);
        };

        const visited = sessionStorage.getItem(sessionKey);
        if (!visited) {
            increaseCount().then(() => {
                sessionStorage.setItem(sessionKey, "true");
                updateCount();
            });
        } else {
            updateCount();
        }
    }, [type]);

    return (
        <>
            {type === "total" && (
                <>
                    <strong className="visitor-count">{count ?? "..."}</strong>
                    <span>번째 방문자님, 환영합니다 🙌</span>
                </>
            )}
            {type === "today" && (
                <div className="today-count">오늘 방문자: {count ?? "..."}명</div>
            )}
        </>
    );
};

export default VisitorCounter;
