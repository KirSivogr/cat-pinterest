module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'jsdom',
   moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '\\.(css|scss)$': 'identity-obj-proxy',
   },
   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
   transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Преобразование TypeScript файлов
      '^.+\\.js$': 'babel-jest', // Преобразование JS файлов с использованием Babel
   },
   transformIgnorePatterns: [
      '/node_modules/(?!your-es-module-to-transform)', // Игнорировать преобразование некоторых node_modules, если они поддерживают ES-модули
   ],
};
