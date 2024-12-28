"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    linhabonus(idjson) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsons = {
                [1]: {
                    [0]: {
                        completed: true,
                        rf: false,
                        rtf: false,
                        im: true,
                        fs: true,
                        rc: 0,
                        st: 0,
                        wp: {
                            "1": [0, 4, 8],
                            "2": [0, 5, 8],
                            "3": [0, 5, 9],
                            "4": [1, 5, 8],
                            "5": [1, 5, 9],
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [7, 7, 7, 99, 7, 7, 7, 7, 7, 7, 7, 99],
                        lw: {
                            "1": 6.0,
                            "2": 6.0,
                            "3": 6.0,
                            "4": 6.0,
                            "5": 6.0,
                            "6": 6.0,
                            "7": 6.0,
                            "8": 6.0,
                            "9": 6.0,
                            "10": 6.0,
                        },
                        rwsp: {
                            "1": 3.0,
                            "2": 3.0,
                            "3": 3.0,
                            "4": 3.0,
                            "5": 3.0,
                            "6": 3.0,
                            "7": 3.0,
                            "8": 3.0,
                            "9": 3.0,
                            "10": 3.0,
                        },
                    },
                    [1]: {
                        rf: true,
                        rtf: false,
                        fs: true,
                        rc: 1,
                        st: 1,
                        wp: null,
                        rl: [2, 2, 2, 99, 5, 5, 5, 5, 2, 2, 2, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [2]: {
                    [0]: {
                        completed: true,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        im: true,
                        fs: true,
                        st: 0,
                        wp: {
                            "1": [0, 4, 8],
                            "2": [0, 5, 8],
                            "3": [0, 5, 9],
                            "4": [1, 5, 8],
                            "5": [1, 5, 9],
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [6, 6, 6, 99, 6, 6, 6, 6, 6, 6, 6, 99],
                        lw: {
                            "1": 6.0,
                            "2": 6.0,
                            "3": 6.0,
                            "4": 6.0,
                            "5": 6.0,
                            "6": 6.0,
                            "7": 6.0,
                            "8": 6.0,
                            "9": 6.0,
                            "10": 6.0,
                        },
                        rwsp: {
                            "1": 5.0,
                            "2": 5.0,
                            "3": 5.0,
                            "4": 5.0,
                            "5": 5.0,
                            "6": 5.0,
                            "7": 5.0,
                            "8": 5.0,
                            "9": 5.0,
                            "10": 5.0,
                        },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [4, 4, 4, 99, 2, 2, 2, 5, 4, 4, 4, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [3, 3, 3, 99, 2, 2, 2, 5, 3, 3, 3, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [3]: {
                    [0]: {
                        completed: true,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        fs: true,
                        im: true,
                        st: 0,
                        wp: {
                            "1": [0, 4, 8],
                            "2": [0, 5, 8],
                            "3": [0, 5, 9],
                            "4": [1, 5, 8],
                            "5": [1, 5, 9],
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [5, 5, 5, 99, 5, 5, 5, 5, 5, 5, 5, 99],
                        lw: {
                            "1": 6.0,
                            "2": 6.0,
                            "3": 6.0,
                            "4": 6.0,
                            "5": 6.0,
                            "6": 6.0,
                            "7": 6.0,
                            "8": 6.0,
                            "9": 6.0,
                            "10": 6.0,
                        },
                        rwsp: {
                            "1": 10.0,
                            "2": 10.0,
                            "3": 10.0,
                            "4": 10.0,
                            "5": 10.0,
                            "6": 10.0,
                            "7": 10.0,
                            "8": 10.0,
                            "9": 10.0,
                            "10": 10.0,
                        },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [2, 2, 2, 99, 5, 5, 5, 3, 2, 2, 2, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 0,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [7, 7, 7, 99, 5, 5, 5, 5, 7, 7, 7, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [3]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [3, 3, 3, 99, 2, 2, 2, 5, 3, 3, 3, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [4]: {
                    [0]: {
                        completed: true,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        fs: true,
                        im: true,
                        st: 0,
                        wp: {
                            "1": [0, 4, 8],
                            "2": [0, 5, 8],
                            "3": [0, 5, 9],
                            "4": [1, 5, 8],
                            "5": [1, 5, 9],
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [4, 4, 4, 99, 4, 4, 4, 4, 4, 4, 4, 99],
                        lw: {
                            "1": 6.0,
                            "2": 6.0,
                            "3": 6.0,
                            "4": 6.0,
                            "5": 6.0,
                            "6": 6.0,
                            "7": 6.0,
                            "8": 6.0,
                            "9": 6.0,
                            "10": 6.0,
                        },
                        rwsp: {
                            "1": 20.0,
                            "2": 20.0,
                            "3": 20.0,
                            "4": 20.0,
                            "5": 20.0,
                            "6": 20.0,
                            "7": 20.0,
                            "8": 20.0,
                            "9": 20.0,
                            "10": 20.0,
                        },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [6, 6, 6, 99, 2, 2, 2, 5, 6, 6, 6, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 0,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [5, 5, 5, 99, 4, 4, 4, 4, 5, 5, 5, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [3]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [2, 2, 2, 99, 3, 3, 3, 5, 2, 2, 2, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [5]: {
                    [0]: {
                        completed: true,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        fs: true,
                        im: true,
                        st: 0,
                        wp: {
                            "1": [0, 4, 8],
                            "2": [0, 5, 8],
                            "3": [0, 5, 9],
                            "4": [1, 5, 8],
                            "5": [1, 5, 9],
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 99],
                        lw: {
                            "1": 6.0,
                            "2": 6.0,
                            "3": 6.0,
                            "4": 6.0,
                            "5": 6.0,
                            "6": 6.0,
                            "7": 6.0,
                            "8": 6.0,
                            "9": 6.0,
                            "10": 6.0,
                        },
                        rwsp: {
                            "1": 50.0,
                            "2": 50.0,
                            "3": 50.0,
                            "4": 50.0,
                            "5": 50.0,
                            "6": 50.0,
                            "7": 50.0,
                            "8": 50.0,
                            "9": 50.0,
                            "10": 50.0,
                        },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [5, 5, 5, 99, 4, 4, 4, 3, 5, 5, 5, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 0,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [6, 6, 6, 99, 7, 7, 7, 7, 6, 6, 6, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [3]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [7, 7, 7, 99, 6, 6, 6, 2, 7, 7, 7, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [6]: {
                    [0]: {
                        completed: true,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        fs: true,
                        im: true,
                        st: 0,
                        wp: {
                            "1": [0, 4, 8],
                            "2": [0, 5, 8],
                            "3": [0, 5, 9],
                            "4": [1, 5, 8],
                            "5": [1, 5, 9],
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [2, 2, 2, 99, 2, 2, 2, 2, 2, 2, 2, 99],
                        lw: {
                            "1": 6.0,
                            "2": 6.0,
                            "3": 6.0,
                            "4": 6.0,
                            "5": 6.0,
                            "6": 6.0,
                            "7": 6.0,
                            "8": 6.0,
                            "9": 6.0,
                            "10": 6.0,
                        },
                        rwsp: {
                            "1": 100.0,
                            "2": 100.0,
                            "3": 100.0,
                            "4": 100.0,
                            "5": 100.0,
                            "6": 100.0,
                            "7": 100.0,
                            "8": 100.0,
                            "9": 100.0,
                            "10": 100.0,
                        },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [4, 4, 4, 99, 2, 2, 2, 5, 4, 4, 4, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 0,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [5, 5, 5, 99, 2, 2, 2, 2, 5, 5, 5, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [3]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [7, 7, 7, 99, 6, 6, 6, 4, 7, 7, 7, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [7]: {
                    [0]: {
                        completed: false,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        fs: true,
                        im: false,
                        st: 0,
                        wp: {
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [7, 7, 7, 99, 5, 5, 0, 0, 7, 7, 7, 99],
                        lw: { "6": 3.0, "7": 3.0, "8": 3.0, "9": 3.0, "10": 3.0 },
                        rwsp: { "6": 3.0, "7": 3.0, "8": 3.0, "9": 3.0, "10": 3.0 },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [4, 4, 4, 99, 2, 2, 2, 5, 4, 4, 4, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 0,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [4, 4, 4, 99, 3, 3, 3, 5, 4, 4, 4, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [3]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [3, 3, 3, 99, 7, 7, 7, 7, 3, 3, 3, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [8]: {
                    [0]: {
                        completed: false,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        fs: true,
                        im: false,
                        st: 0,
                        wp: {
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [6, 6, 6, 99, 5, 5, 0, 0, 6, 6, 6, 99],
                        lw: { "6": 3.0, "7": 3.0, "8": 3.0, "9": 3.0, "10": 3.0 },
                        rwsp: { "6": 5.0, "7": 5.0, "8": 5.0, "9": 5.0, "10": 5.0 },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [4, 4, 4, 99, 2, 2, 2, 5, 4, 4, 4, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 0,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [4, 4, 4, 99, 3, 3, 3, 5, 4, 4, 4, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [3]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [3, 3, 3, 99, 7, 7, 7, 7, 3, 3, 3, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [9]: {
                    [0]: {
                        completed: false,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        fs: true,
                        im: false,
                        st: 0,
                        wp: {
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [5, 5, 5, 99, 2, 2, 0, 0, 5, 5, 5, 99],
                        lw: { "6": 3.0, "7": 3.0, "8": 3.0, "9": 3.0, "10": 3.0 },
                        rwsp: { "6": 10.0, "7": 10.0, "8": 10.0, "9": 10.0, "10": 10.0 },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [4, 4, 4, 99, 2, 2, 2, 5, 4, 4, 4, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 0,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [2, 2, 2, 99, 3, 3, 3, 5, 2, 2, 2, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [3]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [3, 3, 3, 99, 7, 7, 7, 7, 3, 3, 3, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [10]: {
                    [0]: {
                        completed: false,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        fs: true,
                        im: false,
                        st: 0,
                        wp: {
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [4, 4, 4, 99, 3, 3, 0, 0, 4, 4, 4, 99],
                        lw: { "6": 3.0, "7": 3.0, "8": 3.0, "9": 3.0, "10": 3.0 },
                        rwsp: { "6": 20.0, "7": 20.0, "8": 20.0, "9": 20.0, "10": 20.0 },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [3, 3, 3, 99, 7, 7, 7, 5, 3, 3, 3, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 0,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [2, 2, 2, 99, 3, 3, 4, 5, 2, 2, 2, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [3]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [6, 6, 6, 99, 7, 7, 7, 7, 6, 6, 6, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [11]: {
                    [0]: {
                        completed: false,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        fs: true,
                        im: false,
                        st: 0,
                        wp: {
                            "6": [1, 6, 9],
                            "7": [1, 6, 10],
                            "8": [2, 6, 9],
                            "9": [2, 6, 10],
                            "10": [2, 7, 10],
                        },
                        rl: [3, 3, 3, 99, 2, 2, 0, 0, 3, 3, 3, 99],
                        lw: { "6": 3.0, "7": 3.0, "8": 3.0, "9": 3.0, "10": 3.0 },
                        rwsp: { "6": 50.0, "7": 50.0, "8": 50.0, "9": 50.0, "10": 50.0 },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [3, 3, 3, 99, 7, 7, 7, 5, 3, 3, 3, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 0,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [2, 2, 2, 99, 3, 3, 4, 5, 2, 2, 2, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [3]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [6, 6, 6, 99, 7, 7, 7, 7, 6, 6, 6, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
                [12]: {
                    [0]: {
                        completed: false,
                        rf: false,
                        rtf: false,
                        rc: 3,
                        fs: true,
                        im: false,
                        st: 0,
                        wp: {
                            "1": [0, 4, 8],
                            "2": [0, 5, 8],
                            "3": [0, 5, 9],
                            "4": [1, 5, 8],
                            "5": [1, 5, 9],
                        },
                        rl: [2, 2, 2, 99, 2, 2, 4, 4, 2, 2, 2, 99],
                        lw: { "1": 1.8, "2": 1.8, "3": 1.8, "4": 1.8, "5": 1.8 },
                        rwsp: {
                            "1": 100.0,
                            "2": 100.0,
                            "3": 100.0,
                            "4": 100.0,
                            "5": 100.0,
                        },
                    },
                    [1]: {
                        rf: false,
                        rtf: false,
                        rc: 2,
                        fs: true,
                        st: 0,
                        itw: false,
                        wp: null,
                        rl: [5, 5, 5, 99, 3, 3, 3, 3, 5, 5, 5, 99],
                        lw: null,
                        rwsp: null,
                    },
                    [2]: {
                        rf: true,
                        rtf: false,
                        rc: 1,
                        st: 1,
                        itw: true,
                        fs: true,
                        wp: null,
                        rl: [5, 5, 5, 99, 4, 4, 4, 4, 5, 5, 5, 99],
                        lw: null,
                        rwsp: null,
                    },
                },
            };
            return jsons[idjson];
        });
    },
};
