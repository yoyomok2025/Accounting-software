
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AreaAnalysisCards: typeof import("../components/Area/Analysis/Cards.vue")['default']
export const AreaAnalysisCategories: typeof import("../components/Area/Analysis/Categories.vue")['default']
export const AreaAnalysisCategorySelector: typeof import("../components/Area/Analysis/CategorySelector.vue")['default']
export const AreaAnalysisSectionCategory: typeof import("../components/Area/Analysis/SectionCategory.vue")['default']
export const AreaAnalysisSectionStore: typeof import("../components/Area/Analysis/SectionStore.vue")['default']
export const AreaAnalysisSectionTags: typeof import("../components/Area/Analysis/SectionTags.vue")['default']
export const AreaHomeCards: typeof import("../components/Area/Home/Cards.vue")['default']
export const AreaOverviewCards: typeof import("../components/Area/Overview/Cards.vue")['default']
export const AreaOverviewContent: typeof import("../components/Area/Overview/Content.vue")['default']
export const AreaOverviewTotalCountor: typeof import("../components/Area/Overview/TotalCountor.vue")['default']
export const AreaRecordForm: typeof import("../components/Area/Record/Form.vue")['default']
export const AreaRecordHeader: typeof import("../components/Area/Record/Header.vue")['default']
export const AreaRecordModeCreator: typeof import("../components/Area/Record/ModeCreator.vue")['default']
export const AreaRecordModeEditor: typeof import("../components/Area/Record/ModeEditor.vue")['default']
export const AreaRecordSection: typeof import("../components/Area/Record/Section.vue")['default']
export const AreaRecordTypeSelector: typeof import("../components/Area/Record/TypeSelector.vue")['default']
export const AreaSearchDetail: typeof import("../components/Area/Search/Detail.vue")['default']
export const AreaSearchHeader: typeof import("../components/Area/Search/Header.vue")['default']
export const AreaSearchSection: typeof import("../components/Area/Search/Section.vue")['default']
export const CardContent: typeof import("../components/Card/Content.vue")['default']
export const CardItem: typeof import("../components/Card/Item.vue")['default']
export const CardList: typeof import("../components/Card/List.vue")['default']
export const CardPopUpDetail: typeof import("../components/Card/PopUpDetail.vue")['default']
export const ChartBar: typeof import("../components/Chart/Bar.vue")['default']
export const ChartModeSelector: typeof import("../components/Chart/ModeSelector.vue")['default']
export const ChartPie: typeof import("../components/Chart/Pie.vue")['default']
export const ChartTimeSelector: typeof import("../components/Chart/TimeSelector.vue")['default']
export const ChartTypeSelector: typeof import("../components/Chart/TypeSelector.vue")['default']
export const FormCategoryExpense: typeof import("../components/Form/CategoryExpense.vue")['default']
export const FormCategoryIncome: typeof import("../components/Form/CategoryIncome.vue")['default']
export const FormDatePicker: typeof import("../components/Form/DatePicker.vue")['default']
export const FormNote: typeof import("../components/Form/Note.vue")['default']
export const FormPrice: typeof import("../components/Form/Price.vue")['default']
export const FormStore: typeof import("../components/Form/Store.vue")['default']
export const FormTags: typeof import("../components/Form/Tags.vue")['default']
export const FormTime: typeof import("../components/Form/Time.vue")['default']
export const HeaderSection: typeof import("../components/Header/Section.vue")['default']
export const InputClearableText: typeof import("../components/Input/ClearableText.vue")['default']
export const InputHashTags: typeof import("../components/Input/HashTags.vue")['default']
export const InputNumber: typeof import("../components/Input/Number.vue")['default']
export const InputSearch: typeof import("../components/Input/Search.vue")['default']
export const InputSelect: typeof import("../components/Input/Select.vue")['default']
export const InputText: typeof import("../components/Input/Text.vue")['default']
export const InputTextArea: typeof import("../components/Input/TextArea.vue")['default']
export const MenuSection: typeof import("../components/Menu/Section.vue")['default']
export const TheAccordion: typeof import("../components/TheAccordion.vue")['default']
export const TheButton: typeof import("../components/TheButton.vue")['default']
export const TheCalendar: typeof import("../components/TheCalendar.vue")['default']
export const TheCountor: typeof import("../components/TheCountor.vue")['default']
export const TheEmpty: typeof import("../components/TheEmpty.vue")['default']
export const TheIcon: typeof import("../components/TheIcon.vue")['default']
export const ThePopConfirm: typeof import("../components/ThePopConfirm.vue")['default']
export const ThePopUp: typeof import("../components/ThePopUp.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAreaAnalysisCards: LazyComponent<typeof import("../components/Area/Analysis/Cards.vue")['default']>
export const LazyAreaAnalysisCategories: LazyComponent<typeof import("../components/Area/Analysis/Categories.vue")['default']>
export const LazyAreaAnalysisCategorySelector: LazyComponent<typeof import("../components/Area/Analysis/CategorySelector.vue")['default']>
export const LazyAreaAnalysisSectionCategory: LazyComponent<typeof import("../components/Area/Analysis/SectionCategory.vue")['default']>
export const LazyAreaAnalysisSectionStore: LazyComponent<typeof import("../components/Area/Analysis/SectionStore.vue")['default']>
export const LazyAreaAnalysisSectionTags: LazyComponent<typeof import("../components/Area/Analysis/SectionTags.vue")['default']>
export const LazyAreaHomeCards: LazyComponent<typeof import("../components/Area/Home/Cards.vue")['default']>
export const LazyAreaOverviewCards: LazyComponent<typeof import("../components/Area/Overview/Cards.vue")['default']>
export const LazyAreaOverviewContent: LazyComponent<typeof import("../components/Area/Overview/Content.vue")['default']>
export const LazyAreaOverviewTotalCountor: LazyComponent<typeof import("../components/Area/Overview/TotalCountor.vue")['default']>
export const LazyAreaRecordForm: LazyComponent<typeof import("../components/Area/Record/Form.vue")['default']>
export const LazyAreaRecordHeader: LazyComponent<typeof import("../components/Area/Record/Header.vue")['default']>
export const LazyAreaRecordModeCreator: LazyComponent<typeof import("../components/Area/Record/ModeCreator.vue")['default']>
export const LazyAreaRecordModeEditor: LazyComponent<typeof import("../components/Area/Record/ModeEditor.vue")['default']>
export const LazyAreaRecordSection: LazyComponent<typeof import("../components/Area/Record/Section.vue")['default']>
export const LazyAreaRecordTypeSelector: LazyComponent<typeof import("../components/Area/Record/TypeSelector.vue")['default']>
export const LazyAreaSearchDetail: LazyComponent<typeof import("../components/Area/Search/Detail.vue")['default']>
export const LazyAreaSearchHeader: LazyComponent<typeof import("../components/Area/Search/Header.vue")['default']>
export const LazyAreaSearchSection: LazyComponent<typeof import("../components/Area/Search/Section.vue")['default']>
export const LazyCardContent: LazyComponent<typeof import("../components/Card/Content.vue")['default']>
export const LazyCardItem: LazyComponent<typeof import("../components/Card/Item.vue")['default']>
export const LazyCardList: LazyComponent<typeof import("../components/Card/List.vue")['default']>
export const LazyCardPopUpDetail: LazyComponent<typeof import("../components/Card/PopUpDetail.vue")['default']>
export const LazyChartBar: LazyComponent<typeof import("../components/Chart/Bar.vue")['default']>
export const LazyChartModeSelector: LazyComponent<typeof import("../components/Chart/ModeSelector.vue")['default']>
export const LazyChartPie: LazyComponent<typeof import("../components/Chart/Pie.vue")['default']>
export const LazyChartTimeSelector: LazyComponent<typeof import("../components/Chart/TimeSelector.vue")['default']>
export const LazyChartTypeSelector: LazyComponent<typeof import("../components/Chart/TypeSelector.vue")['default']>
export const LazyFormCategoryExpense: LazyComponent<typeof import("../components/Form/CategoryExpense.vue")['default']>
export const LazyFormCategoryIncome: LazyComponent<typeof import("../components/Form/CategoryIncome.vue")['default']>
export const LazyFormDatePicker: LazyComponent<typeof import("../components/Form/DatePicker.vue")['default']>
export const LazyFormNote: LazyComponent<typeof import("../components/Form/Note.vue")['default']>
export const LazyFormPrice: LazyComponent<typeof import("../components/Form/Price.vue")['default']>
export const LazyFormStore: LazyComponent<typeof import("../components/Form/Store.vue")['default']>
export const LazyFormTags: LazyComponent<typeof import("../components/Form/Tags.vue")['default']>
export const LazyFormTime: LazyComponent<typeof import("../components/Form/Time.vue")['default']>
export const LazyHeaderSection: LazyComponent<typeof import("../components/Header/Section.vue")['default']>
export const LazyInputClearableText: LazyComponent<typeof import("../components/Input/ClearableText.vue")['default']>
export const LazyInputHashTags: LazyComponent<typeof import("../components/Input/HashTags.vue")['default']>
export const LazyInputNumber: LazyComponent<typeof import("../components/Input/Number.vue")['default']>
export const LazyInputSearch: LazyComponent<typeof import("../components/Input/Search.vue")['default']>
export const LazyInputSelect: LazyComponent<typeof import("../components/Input/Select.vue")['default']>
export const LazyInputText: LazyComponent<typeof import("../components/Input/Text.vue")['default']>
export const LazyInputTextArea: LazyComponent<typeof import("../components/Input/TextArea.vue")['default']>
export const LazyMenuSection: LazyComponent<typeof import("../components/Menu/Section.vue")['default']>
export const LazyTheAccordion: LazyComponent<typeof import("../components/TheAccordion.vue")['default']>
export const LazyTheButton: LazyComponent<typeof import("../components/TheButton.vue")['default']>
export const LazyTheCalendar: LazyComponent<typeof import("../components/TheCalendar.vue")['default']>
export const LazyTheCountor: LazyComponent<typeof import("../components/TheCountor.vue")['default']>
export const LazyTheEmpty: LazyComponent<typeof import("../components/TheEmpty.vue")['default']>
export const LazyTheIcon: LazyComponent<typeof import("../components/TheIcon.vue")['default']>
export const LazyThePopConfirm: LazyComponent<typeof import("../components/ThePopConfirm.vue")['default']>
export const LazyThePopUp: LazyComponent<typeof import("../components/ThePopUp.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
