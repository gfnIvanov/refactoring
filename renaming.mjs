/**
 * Переименование
 * Оптимизировать целесообразно небольшие функции, в которых роль переменых очевидна
 * Для сохранения оригинального наименование не используем экспрт по-умолчанию
 */

import path from 'path';

/**
 * before
 */
export default function getPath(arg1, arg2) {
    const papka = 'architecture';
    if (arg2) {
        return path.resolve(papka, arg1);
    } else {
        return path.join(papka, arg1);
    }
}

/**
 * after
 * Функция для получения пути к директории
 * 
 * @param {string} trailDir - директория назначения
 * @param {boolean} getFull - получить полный (абсолютный) путь
 * @returns {string}
 */
 export function getPath(trailDir, getFull) {
    const rootDir = 'architecture';
    if (getFull) {
        return path.resolve(rootDir, trailDir);
    } else {
        return path.join(rootDir, trailDir);
    }
}