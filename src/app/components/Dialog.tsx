import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface SkillTestDialogProps {
    rank: number;
    setRank: (value: number) => void;
    percentile: number;
    setPercentile: (value: number) => void;
    currentScore: number;
    setCurrentScore: (value: number) => void;
    onClose: () => void;
    onSave: () => void;
}

export default function SkillTestDialog({
    rank,
    setRank,
    percentile,
    setPercentile,
    currentScore,
    setCurrentScore,
    onClose,
    onSave,
}: SkillTestDialogProps) {
    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="bg-white [&>button]:hidden">
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Update scores</h2>
                            <Image
                                src="/assets/html.png"
                                alt="HTML5 logo"
                                width={30}
                                height={30}
                            />
                        </div>
                    </DialogTitle>
                </DialogHeader>

                <div className="grid gap-8 py-4">
                    <DialogField
                        label="Rank"
                        value={rank}
                        onChange={setRank}
                        number={1}
                    />
                    <DialogField
                        label="Percentile"
                        value={percentile}
                        onChange={setPercentile}
                        number={2}
                    />
                    <DialogField
                        label="Current Score (out of 15)"
                        value={currentScore}
                        onChange={setCurrentScore}
                        number={3}
                    />
                </div>

                <DialogFooter className="flex justify-end gap-4">
                    <Button variant="outline" onClick={onClose} className="text-blue-500">
                        cancel
                    </Button>
                    <Button onClick={onSave} className="bg-blue-500 text-white">
                        save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DialogFieldProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    number: number;
}

function DialogField({ label, value, onChange, number }: DialogFieldProps) {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center font-bold ">
                    {number}
                </span>
                <Label>
                    Update your<span className="font-extrabold"> {label}</span>
                </Label>
            </div>
            <Input
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-20"
            />
        </div>
    );
}
