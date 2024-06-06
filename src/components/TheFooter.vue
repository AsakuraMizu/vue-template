<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n';

const { t, locale } = useI18n();

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales;
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  await loadLanguageAsync(newLocale);
  locale.value = newLocale;
}
</script>

<template>
  <nav class="mt-6 flex justify-center gap-4 text-xl">
    <router-link class="icon-btn" to="/" :title="t('button.home')">
      <div class="i-carbon-campsite" />
    </router-link>

    <button class="icon-btn" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div class="i-carbon-sun dark:i-carbon-moon" />
    </button>

    <a class="icon-btn" :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div class="i-carbon-language" />
    </a>

    <router-link class="icon-btn" to="/about" :title="t('button.about')" data-test-id="about">
      <div class="i-carbon-dicom-overlay" />
    </router-link>

    <a class="icon-btn" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <div class="i-carbon-logo-github" />
    </a>
  </nav>
</template>
