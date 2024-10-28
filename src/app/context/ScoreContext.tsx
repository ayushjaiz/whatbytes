"use client"
import { createContext, useContext, useState, ReactNode } from "react";

// Define types for the context values
interface ScoreContextType {
    rank: number;
    percentile: number;
    score: number;
    setRank: (rank: number) => void;
    setPercentile: (percentile: number) => void;
    setScore: (score: number) => void;
}

// Create the context with default values
const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

// Provider component
export const ScoreProvider = ({ children }: { children: ReactNode }) => {
    const [rank, setRank] = useState<number>(1);
    const [percentile, setPercentile] = useState<number>(30);
    const [score, setScore] = useState<number>(12);

    return (
        <ScoreContext.Provider value={{ rank, percentile, score, setRank, setPercentile, setScore }}>
            {children}
        </ScoreContext.Provider>
    );
};

// Custom hook for using the context
export const useScore = () => {
    const context = useContext(ScoreContext);
    if (!context) {
        throw new Error("useScore must be used within a ScoreProvider");
    }
    return context;
};
